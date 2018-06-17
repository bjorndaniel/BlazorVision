Blazor.registerFunction('BlazorVision.JSInterop.OnLoaded', () => {
    document.getElementById('fileInput').addEventListener('change', (e) => {
        var img = document.getElementById('imgPreview'),
            tgt = e.target || window.event.srcElement,
            files = tgt.files,
            fr = new FileReader(),
            hf = document.getElementById('hfImage');
        fr.onload = () => {
            hf.value = fr.result;
            hf.dispatchEvent(new Event('change'));
            img.src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    });
});