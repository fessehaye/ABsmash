import * as React from 'react';

interface ABLink {
  name:string;
  link:string;
}

const footerlinks : ABLink[] = [
  {name :'AB General Group', link:'https://goo.gl/vFu9Zn'},
  {name :'Edmonton Group', link:'https://goo.gl/OY8t40'},
  {name :'Calgary Group', link:'https://goo.gl/wBB43K'},
  {name :'Alberta Project M', link:'https://goo.gl/tU4HRc'},
  {name :'Alberta Smash 4', link:'https://goo.gl/fy0U8l'},
  {name :'Alberta Brawl', link:'https://goo.gl/sQm8cH'},
  {name :'Edmonton SSBM', link:'https://goo.gl/DlLDWo'},
  {name :'Edmonton 64', link:'https://goo.gl/uHgDFN'},
  {name :'Alberta Rivals of Aether', link:'https://goo.gl/vmUhaa'},
  {name :'Discord Server', link:'https://discord.gg/0qbRG0NJUawdBYcq'},
  {name :'Event Calendar', link:'https://goo.gl/OMNNhk'}
];

export default () => { 
      return (
        <footer>
           <div className="footer__header">
              <h3>Useful Links</h3>
           </div>
           <div className="footer__content">
              {
                footerlinks.map((footer:ABLink,index:number) => {
                    return (
                      <span key={index}
                        className="footer__link"
                        onClick={
                          () => {
                            const win = window.open(footer.link, '_blank');
                            if(win)
                            {
                              win.focus();
                            }
                          }
                        }
                      >
                        {footer.name}
                      </span>
                    );
                  })
              }
           </div>
           <p className="footer__copyright">©SSBU 2018</p>
        </footer>
      );
  };