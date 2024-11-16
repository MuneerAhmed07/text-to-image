const key = "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";
const inputText = document.getElementById('input');
const image = document.getElementById('image');
const generateBtn = document.getElementById('generate-image-btn');

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: `Bearer ${key}` ,
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputText.value}),
		}
	);
	const result = await response.blob();
    image.style.display = 'block';
	return result;
}

// Get Response here
async function generate() {
    query().then((response) => {
        const objectURL = URL.createObjectURL(response);
        image.src = objectURL;
    });
}

// Add eventListener on button
generateBtn.addEventListener('click', () =>{
    generate();
});

// Add EventListener on Input
inputText.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
        generate();
    }
    // console.log(e);
});