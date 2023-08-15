let dotnetHelper;

registerDotnet = function (dotnetObjRef) {
    console.log('register');
    dotnetHelper = dotnetObjRef;
    document.getElementById('fileInput').addEventListener('change', (e) => {
        var img = document.getElementById('imgPreview'),
            tgt = e.target || window.event.srcElement,
            files = tgt.files,
            fr = new FileReader(),
            hf = document.getElementById('hfImage');
        fr.onload = () => {
            hf.value = fr.result;
            img.src = fr.result;
            hf.dispatchEvent(new Event('change'));
            console.log('onchange fr');

        }
        fr.readAsDataURL(files[0]);
    });
}