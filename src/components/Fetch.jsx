const Fetch = (Db) => {

  return new Promise((resolve, reject) =>{

      setTimeout(() => {

          resolve(Db);

      },2000)
  })
}

export default Fetch;