import { pronouns } from "../data";

export const countWords = (text) => {

    let arrOfWords = text.split(' ')
    const filteringSpaces = arrOfWords.filter((word) => word !== '').length;
    
    return filteringSpaces;
  }
  
  export const countSentences = (text) => {
    let regex = /[.?!|\r?\n|\r]+/
    const result = text.split(regex)
  
    if (result.length === 1) {
      return result.length
    }
  
    return result.length - 1
  }

  export const countParagraph = (text) => {
    return text.replace(/\n$/gm, '').split(/\n/).length
  }

  export const countPronouns = (text) => {
    const punct = "!,\;\.-?():[]\'\"/";
    let count = 0;
    for(let i = 0; i < text.length; i++){
       if(!punct.includes(text[i])){
          continue;
       };
       count++;
    };
    return count;
  }

  export const countSpaces = (text) => {
    let arrOfWords = text.split('')
  
    const filteringSpaces = arrOfWords.filter((word) => word == ' ').length;
  
    return filteringSpaces;
  }
  