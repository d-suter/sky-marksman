function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function displayMobileWarning() {
    var warningDiv = document.createElement("div");
    warningDiv.style.position = "fixed";
    warningDiv.style.top = "0";
    warningDiv.style.left = "0";
    warningDiv.style.width = "100%";
    warningDiv.style.height = "100%";
    warningDiv.style.backgroundColor = "white";
    warningDiv.style.color = "black";
    warningDiv.style.display = "flex";
    warningDiv.style.justifyContent = "center";
    warningDiv.style.alignItems = "center";
    warningDiv.style.zIndex = "9999";
    warningDiv.innerText = "Only Supports PC";

    document.body.appendChild(warningDiv);
}

if (isMobileDevice()) {
    document.addEventListener("DOMContentLoaded", displayMobileWarning);
}
