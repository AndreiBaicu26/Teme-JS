
const FIRST_NAME = "Andrei";
const LAST_NAME = "Baicu";
const GRUPA = "1075";

/**
 * Make the implementation here
 */
function initCaching() {
   
    var section ={
       'home':0,
       'about':0,
       'contact':0
    }

    var cache={
        pageAccessCounter: function (sectionName)
       {
            if(section)
            {
              if(section && typeof sectionName == 'string')
                {
                     var index = sectionName.toLowerCase();
                    section[index]++;
                }else
                   section['home'] += 1;           
            }
        },

        getCache:function () 
        {
            return section;
        }  

    }
    return cache;
}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    initCaching
}

