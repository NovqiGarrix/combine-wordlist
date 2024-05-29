
const wordlists = new Set<string>();

for await (const file of Deno.readDir("wordlist")) {

    const f = await Deno.readTextFile(`wordlist/${file.name}`);
    const splittedText = f.split("\n");

    for (const word of splittedText) {
        wordlists.add(word);
    }

}

await Deno.writeTextFile("wordlist.txt", Array.from(wordlists).join("\n"));