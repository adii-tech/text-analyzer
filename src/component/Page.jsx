import React from 'react';
import './pageStyles.css';
import MainSection from './MainSection';

const Page = () => {
  return (
    <>
      <div className="frame-parent">
      <div className="normal-input">
        <div className="frame-group">
          <div className="text-analyzer-parent">
            <div className="text-analyzer">Text Analyzer</div>
            <div className="text-analyzer-is">
              Text Analyzer is a simple free online tool for SEO web content
              analysis that helps you find most frequent phrases and words,
              number of characters, words, sentences and paragraphs, and
              estimated read and speak time of your content.
            </div>
          </div>
          <div style={ {'width':'100%'}}>
            <MainSection />
          </div>
        </div>
      </div>
    </div>   
    </>
  )
}

export default Page;

    