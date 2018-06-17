Blazor.registerFunction('BlazorML.JSInterop.OnLoaded', () => {
    document.getElementById('fileInput').addEventListener('change', (e) => {
        var img = document.getElementById('imgPreview'),
            tgt = e.target || window.event.srcElement,
            files = tgt.files,
            fr = new FileReader();
        fr.onload = () => {
            img.src = fr.result;
            localStorage.setItem('image', getBase64Img(fr.result));
            document.getElementById('btnProcess').click();
        }
        fr.readAsDataURL(files[0]);

    });
});

function getBase64Image(img) {
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        dataURL = canvas.toDataURL("image/png");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
