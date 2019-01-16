function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
       var ascii = binaryString.charCodeAt(i);
       bytes[i] = ascii;
    }
    return bytes;
}

function saveByteArray(reportName, byte) {
    var blob = new Blob([byte]);
    var link = document.createElement('a');
    if(window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob, reportName);
    }
    else if(navigator.userAgent.indexOf("Firefox") !== -1){
        var url = window.URL.createObjectURL(blob);
        link.href = url;
        link.download = reportName;
        document.body.appendChild(link);
        link.click();
        setTimeout(function(){
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        },100);
    }
    else{
        link.href = window.URL.createObjectURL(blob);
        var fileName = reportName;
        link.download = fileName;
        link.click();
    }
};

export {getBase64, base64ToArrayBuffer, saveByteArray}