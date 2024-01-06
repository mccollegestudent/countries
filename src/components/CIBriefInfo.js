import React from 'react';

const CIBriefInfo = ({country,  wikiSearchData}) => {
    var firstEntry = wikiSearchData[0];
      if(!firstEntry)
        firstEntry ={snippet: 'undefined'}
    return(
        <div className='flex flex-column pa3'>
            <h1 className='f90 blue'>{country.name}</h1>
            {firstEntry && !(firstEntry.snippet === 'undefined') ? (
            <div>
                <p className='min-w-20 max-w-20 fw9 light-red pa3' dangerouslySetInnerHTML={{ __html: firstEntry.snippet }}></p>
                <a
                className='tc flex justify-center dark-orange bg-yellow grow growoutline w-25 pa3 ml3'
                href={`https://en.wikipedia.org/?curid=${firstEntry.pageid}`}
                target='__blank'
                rel='nofollow'
                >
                Read More
                </a>
            </div>
            ) : (
            <p></p>
            )}
        </div>
    )
}
export default CIBriefInfo;