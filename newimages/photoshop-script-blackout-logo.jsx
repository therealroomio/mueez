#target photoshop
app.bringToFront();

if (app.documents.length > 0) {
    var doc = app.activeDocument;

    // Create new layer on top
    var blackLayer = doc.artLayers.add();
    blackLayer.name = "Black Layer";
    blackLayer.move(doc.artLayers[0], ElementPlacement.PLACEBEFORE);

    // Fill the layer with black
    app.activeDocument.selection.selectAll();
    app.activeDocument.selection.fill(app.foregroundColor);
    app.activeDocument.selection.deselect();

    // Place watermark
    var logoPath = "logo.png"; // Change this to your logo file path
    var logoFile = new File(logoPath);
    if (logoFile.exists) {
        var logoLayer = app.activeDocument.artLayers.add();
        var placedLogo = app.open(logoFile);
        placedLogo.artLayers[0].duplicate(doc, ElementPlacement.PLACEATEND);
        placedLogo.close(SaveOptions.DONOTSAVECHANGES);
    } else {
        alert("Watermark logo not found!");
    }

    // Get a sequential number
    var sequenceNumber = 1; // Change this logic if you want dynamic numbering
    var sequenceFile = new File(doc.path + "/sequence.txt");
    if (sequenceFile.exists) {
        sequenceFile.open("r");
        sequenceNumber = parseInt(sequenceFile.read()) + 1;
        sequenceFile.close();
    }
    sequenceFile.open("w");
    sequenceFile.write(sequenceNumber);
    sequenceFile.close();

    // Create a new text layer for the number
    var textLayer = doc.artLayers.add();
    textLayer.kind = LayerKind.TEXT;
    textLayer.textItem.contents = sequenceNumber.toString();
    textLayer.textItem.size = 30; // Adjust text size as needed
    textLayer.textItem.color = new SolidColor();
    textLayer.textItem.color.rgb.red = 255;
    textLayer.textItem.color.rgb.green = 255;
    textLayer.textItem.color.rgb.blue = 255;
    textLayer.name = "Sequence Number";

    // Position the text in the bottom right
    var docWidth = doc.width.as("px");
    var docHeight = doc.height.as("px");
    textLayer.textItem.position = [docWidth - 100, docHeight - 50]; // Adjust offsets as needed

    // Save as PNG
    var savePath = doc.path + "/" + doc.name.replace(/\.[^\.]+$/, '') + "_watermarked.png";
    var pngSaveOptions = new PNGSaveOptions();
    pngSaveOptions.interlaced = false;
    doc.saveAs(new File(savePath), pngSaveOptions, true, Extension.LOWERCASE);

    // Close the document
    doc.close(SaveOptions.DONOTSAVECHANGES);

    alert("Process completed. File saved as: " + savePath);
} else {
    alert("No document is open!");
}