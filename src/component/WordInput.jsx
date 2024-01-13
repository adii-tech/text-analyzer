import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { countWords } from '../utils';

const WordInput = () => {
  const [word,setWord]=useState('');
  const [tdata,setTdata]=useState({});
  const [synonyms, steSynonyms]=useState([]);
  const [antonyms,setAntonyms]=useState([]);
  const [defination,setDefination]=useState('');
  const [partOfSpeech,setPartOfSpeech]=useState('');
  
  function handleChange(){
    // const options = {
    //   method: 'GET',
    //   url: `https://wordsapiv1.p.rapidapi.com/words/${word}/typeOf`,
    //   headers: {
    //     'X-RapidAPI-Key': '00d295cd06msh08fae02120144bcp1245f8jsn2b331cb39908',
    //     'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    //   }
    // };
    const temp=word;
    const fetchData= async()=>{
      try{
      const data=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      let d=data.data[0].meanings[0];
      setTdata(d);
      console.log(data.data[0].meanings[1]);
      
      //console.log(d.synonyms.slice(0, 5));
      //console.log(d.antonyms.slice(0, 5));
       steSynonyms(d.synonyms.slice(0, 5));
       setAntonyms(d.antonyms.slice(0,5));
       setDefination(d.definitions[0].definition);
       setPartOfSpeech(d.partOfSpeech)
      }
      catch(error){
        console.log(error);
        setDefination('')
        setAntonyms([])
        steSynonyms([])
        setPartOfSpeech('');
      }
      }
      console.log(word)
       fetchData();
     }
  return (
   <>
      <div className="input-parent">
                <div className="input">
                  <div className="content">
                    <div className="text11"><input type='text' className='coustom-input' onChange={(e)=>setWord(e.target.value)}/> </div>
                  </div>
                </div>
                <div className="process-word-wrapper" onClick={handleChange}>
                  <div className="process-word" >Process Word</div>
                </div>
              </div>
            <div className="character-table-parent">
              <div className="character-table">
                <div className="header-table">
                  <div className="table-header-cell">
                    <div className="table-header">
                      <div className="text12">Characters</div>
                    </div>
                  </div>
                  <div className="table-header-cell1">
                    <div className="table-header">
                      <div className="text12">Words</div>
                    </div>
                  </div>
                </div>
                <div className="row-2-wrapper">
                  <div className="row-2">
                    <div className="table-cell">
                      <div className="text12">{word.length}</div>
                    </div>
                    <div className="table-cell1">
                      <div className="text12">{countWords(word)}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-container">
                <div className="text-parent">
                  <div className="text16">Defination:</div>
                  <div className="text17">
                    <p className="in-relating-to">
                        {tdata&&defination?defination:<span>--</span>}
                    </p>
                  </div>
                </div>
                <div className="text-parent">
                  <div className="text12">Parts of speech:</div>
                  <div className="text17">{partOfSpeech?partOfSpeech:<span>--</span>}</div>
                </div>
                <div className="text-parent">
                  <div className="text16">Synonyms:</div>
                  { synonyms.length>0? synonyms.map((e)=> (<><div key={Math.random} className="text17">{e},</div></>)) :<span>--</span> }
                </div>
             
                <div className="text-parent">
                  <div className="text16">Antonyms:</div>
                  { antonyms.length>0?antonyms.map((e)=> (<><div key={Math.random} className="text17">{e},</div></>)):<span>--</span>}
                </div>
              </div>
            </div>
    </>
  )
}

export default WordInput;


