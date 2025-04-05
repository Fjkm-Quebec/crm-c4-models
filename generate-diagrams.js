const plantuml = require('plantuml');
const fs = require('fs');
const path = require('path');

const srcDir = 'src';
const diagramsDir = 'diagrams';

// Ensure the diagrams directory exists
if (!fs.existsSync(diagramsDir)) {
    fs.mkdirSync(diagramsDir);
}

// Function to generate a diagram from a .puml file
async function generateDiagram(pumlFile) {
    const pumlContent = fs.readFileSync(pumlFile, 'utf-8');
    const diagramName = path.basename(pumlFile, '.puml');
    const pngFile = path.join(diagramsDir, `${diagramName}.png`);

    console.log(`Generating diagram: ${diagramName}`);

    try {
        const gen = plantuml.generate(pumlContent, { format: 'png', output: pngFile });
        await gen.out.on('end', () => {
            console.log(`Diagram generated: ${pngFile}`);
        });
        await gen.out.on('error', (error) => {
            console.error(`Error generating diagram ${diagramName}:`, error);
            throw error;
        });
    } catch (error) {
        console.error(`Error generating diagram ${diagramName}:`, error);
        throw error;
    }
}

// Find all .puml files in the src directory
const pumlFiles = fs.readdirSync(srcDir).filter(file => file.endsWith('.puml')).map(file => path.join(srcDir, file));

// Generate diagrams for each .puml file
async function main() {
    for (const pumlFile of pumlFiles) {
        await generateDiagram(pumlFile);
    }
}

main().catch(error => {
    console.error('An error occurred:', error);
    process.exit(1);
});
