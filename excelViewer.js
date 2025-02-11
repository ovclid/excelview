// excelViewer.js 파일 예시
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const htmlString = XLSX.utils.sheet_to_html(worksheet);

        document.getElementById('excelTable').innerHTML = htmlString;
    };

    reader.readAsArrayBuffer(file);
});
