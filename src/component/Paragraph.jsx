import React, { useEffect, useState } from 'react';
import {
  countParagraph,
  countPronouns,
  countSentences,
  countSpaces,
  countWords, 
} from '../utils';

const Paragraph = () => {
 const [text, setText]=useState('');

  const [words,setWords]=useState(0);
  const [characters,setCharacter]=useState(0);
  const [sentences, setSentences]=useState(0);
  const [paragraphs, setParagraphs]=useState(0);
  const [pronouns,setPronouns]=useState(0);
  const [space, setSpace]=useState(0);

  useEffect(()=>{
      if(text.length===0){
         setWords(0);
         setCharacter(0);
         setSentences(0);
         setParagraphs(0);
         setPronouns(0);
         setSpace(0);
      }
      if(text.length>0){
        setWords(countWords(text));
         setCharacter(text.length-countSpaces(text));
         setSentences(countSentences(text));
         setParagraphs(countParagraph(text));
         setPronouns(countPronouns(text));
         setSpace(countSpaces(text));
      }
      
  },[text])


  return (
    <div style={{'width':'100%'}}> 
        <div className="paragraph">
                <textarea rows='15' className="text11" onChange={(e)=>setText(e.target.value)} placeholder='Enter text here'>  
                </textarea>
              </div>
          <div className='tablep'>
            <table>
              <thead>
              <tr>
                  <th>Words</th>
                  <th>Characters</th>
                  <th>Sentences</th>
                  <th>Paragraphs</th>
                  <th>Spaces</th>
                  <th>Punctuation</th>
                </tr>  
              </thead>
              
              <tbody>
                <tr>
                  <td>{words}</td>
                  <td>{characters}</td>
                  <td>{sentences}</td>
                  <td>{paragraphs}</td>
                  <td>{space}</td>
                  <td>{pronouns}</td>
                </tr>
              </tbody>
              
            </table>
          </div>
    </div>
  )
}

export default Paragraph;