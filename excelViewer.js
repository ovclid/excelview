// excelViewer.js 파일 예시
fetch('sample.xlsx') // 고정된 엑셀 파일 경로를 설정합니다
    .then(response => response.arrayBuffer())
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const htmlString = XLSX.utils.sheet_to_html(worksheet);

        document.getElementById('excelTable').innerHTML = htmlString;
    })
    .catch(error => console.error('Error fetching Excel file:', error));
