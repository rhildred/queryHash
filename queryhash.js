const getQueryHash = ()=>{
    let oQueries = {};
    let aQueries = document.location.search.substr(1).split('&');
    for(let n = 0; n < aQueries.length; n++){
      let aNvp = aQueries[n].split('=');
      try{
        oQueries[aNvp[0].toString()] = decodeURIComponent(aNvp[1].toString());
      }catch(e){
          console.log(e.toString())
      }
    }
    console.log(oQueries);
    return oQueries;
}
