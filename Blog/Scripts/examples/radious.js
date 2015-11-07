function valueChanged(event) {
    var radiousBox = document.getElementById("radious");
    var currentValue = document.getElementById(event.target.id).value + "px";
    var insideRadiousBoxText = document.getElementById("inside");
    if (event.target.id == "topLeft") {
        radiousBox.style.borderTopLeftRadius = currentValue;
        //insideRadiousBoxText.innerHTML += "border-top-left-radius: " + currentValue;
    }
    if (event.target.id == "topRight") {
        radiousBox.style.borderTopRightRadius = currentValue;
        //insideRadiousBoxText.innerHTML += "border-top-right-radius: " + currentValue;
    }
    if (event.target.id == "bottomLeft") {
        radiousBox.style.borderBottomLeftRadius = currentValue;
        //insideRadiousBoxText.innerHTML += "border-bottom-left-radius: " + currentValue;
    }
    if (event.target.id == "bottomRight") {
        radiousBox.style.borderBottomRightRadius = currentValue;
        //insideRadiousBoxText.innerHTML += "border-bottom-right-radius: " + currentValue;
    }
    var s = '';
    var o = getComputedStyle(radiousBox);
    for (var i = 0; i < o.length; i++) {
        debugger;
        if (o[i] == "border-top-left-radius" || o[i] == "border-top-right-radius" ||
            o[i] == "border-bottom-left-radius" || o[i] == "border-bottom-right-radius")
        s += o[i] + ':' + o.getPropertyValue(o[i]) + ';' + "\n";
    }
    insideRadiousBoxText.innerHTML = s;
}