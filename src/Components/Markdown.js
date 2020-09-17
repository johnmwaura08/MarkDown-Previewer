import React,{ useState} from 'react';
import marked from 'marked';
import styles from './Markdown.module.css'

const initialState = `
This is a paragraph

**This is a bolded text**

> Block Quotes!

# Heading

## Heading 2

- list item 1
- list item 3
- list item 2

[visit man utd's official webiste](https://www.manutd.com/)

This is a inline \`<div></div>\`

This is a block of code 
\`\`\`

let x= 5;
let y = 7;
let w = x + y;


\`\`\`

![Manchester United](https://media.gettyimages.com/photos/scott-mctominay-of-manchester-united-celebrates-scoring-their-second-picture-id1211191266?s=2048x2048)

`; 

export default function Markdown() {
    
    const [text, setText] = useState(initialState);


    const handleChange = (e) => {

        setText(e.target.value)
    }

    const textWithMarkdown = marked(text, {breaks: true})
    return (
        <div className = {styles.container}>

            <h1 > Convert Your Markdown</h1>

                <div className={styles.rowContainer}>
                    <div className={styles.column}>
                        <h3>Enter Your Markdown</h3>
                        <textarea name="editor" id="editor" cols="30" rows="10" value={text} onChange={handleChange} ></textarea>
                    </div>
                    <div className={styles.column}>
                        <h3>See the Result</h3>
                        <div className={styles.preview}  dangerouslySetInnerHTML={{__html: textWithMarkdown}}/>
                    </div>


                </div>
            
        </div>
    )
}
