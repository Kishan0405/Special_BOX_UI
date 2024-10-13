const token = "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";

const inputTxt = document.getElementById("input");
const image = document.getElementById("image");
const generateBtn = document.getElementById("generate-btn");
const generateSimilarBtn = document.getElementById("generate-similar-btn");
const loading = document.getElementById("loading");
const downloadIcon = document.getElementById("download-btn");
const title = document.getElementById("title");
const imageContainer = document.getElementById("image-container");

window.onload = () => {
    imageContainer.style.display = "none"; // Hide the image container
};

const query = async (data, model) => {
    try {
        loading.style.display = "block";
        image.style.display = "none";
        image.classList.remove("fade-in");

        const response = await fetch(model, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: data }),
        });

        if (!response.ok) throw new Error("Failed to generate image");
        return await response.blob();

    } catch (error) {
        console.error(error);
        alert("There was an error generating the image. Please try again.");
    } finally {
        loading.style.display = "none";
    }
};

const generateImage = async (isSimilar = false) => {
    const inputText = inputTxt.value.trim();
    if (!inputText) return alert("Please enter a text prompt.");

    // Disable input and buttons
    inputTxt.disabled = true;
    generateBtn.disabled = true;
    generateSimilarBtn.disabled = true;

    title.classList.add("hidden");
    imageContainer.style.display = "flex"; // Show the image container

    // Use specific model for Generate button
    const model = isSimilar
        ? selectRandomModel()
        : "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";

    const response = await query(inputText, model);
    if (response) {
        const objectURL = URL.createObjectURL(response);
        image.src = objectURL;
        image.style.display = "block"; // Show the image
        image.classList.add("fade-in");

        // Show the download icon
        downloadIcon.style.display = "block";
        downloadIcon.href = objectURL;
        downloadIcon.download = "generated-image.png";
    }

    title.classList.remove("hidden"); // Restore visibility
    title.style.transition = "opacity 0.3s ease"; // Smooth transition

    // Re-enable the input and buttons after generating the image
    inputTxt.disabled = false;
    generateBtn.disabled = false;
    generateSimilarBtn.disabled = false;
};

const selectRandomModel = () => {
    const models = [
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
        "https://api-inference.huggingface.co/models/bghira/flux-cheechandchong-regularised",
        "https://api-inference.huggingface.co/models/dreamlike-art/dreamlike-photoreal-2.0",
        "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
        "https://api-inference.huggingface.co/models/XLabs-AI/flux-RealismLora",
        "https://api-inference.huggingface.co/models/comin/IterComp",
        "https://api-inference.huggingface.co/models/OnomaAIResearch/Illustrious-xl-early-release-v0",
        "https://api-inference.huggingface.co/models/Shakker-Labs/FLUX.1-dev-LoRA-Children-Simple-Sketch",
        "https://api-inference.huggingface.co/models/Sudanl/stable-diffusion-2-1-base-custom",
        "https://api-inference.huggingface.co/models/openart-custom/AlbedoBase"
    ];
    const randIndex = Math.floor(Math.random() * models.length);
    return models[randIndex];
};

generateBtn.addEventListener("click", () => {
    generateImage(false);
    generateSimilarBtn.disabled = true; // Disable Generate Similar button
});
generateSimilarBtn.addEventListener("click", () => {
    generateImage(true);
    generateSimilarBtn.disabled = false; // Enable Generate Similar button
});

downloadIcon.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = image.src;
    link.download = "generated-image.png";
    link.click();
});



