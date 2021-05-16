const axios = require('axios').default;
const qs = require('querystring');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const fs = require('fs');

module.exports = {
    GenerateRandomString: function (length) {
      var result           = [];
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
      }
      return result.join('');
    },
    GenerateOTP: function (length) {
      var result           = [];
      var characters       = '0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
      }
      return result.join('');
    },
    GetNGODetails: function (ngoId = "", callback) {
      ngoId = this.GetLastPartOfNGOId(ngoId);
      axios.get(`https://ngodarpan.gov.in/index.php/ajaxcontroller/get_csrf`)
        .then((val) => {
          if(val.status == 200){
            let token = val.data.csrf_token;
            console.log("CSRF_TOKEN: ", val.data.csrf_token);
            
            var data = qs.stringify({
              'csrf_test_name': token,
              'id': ngoId 
            });
            var config = {
              method: 'post',
              url: 'https://ngodarpan.gov.in/index.php/ajaxcontroller/show_ngo_info',
              headers: { 
                'X-Requested-With': 'XMLHttpRequest', 
                'Cookie': `csrf_cookie_name=${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
              fs.writeFileSync('./response.txt', JSON.stringify(response.data, null, 2));
              let result = {
                field: response.data.infor['0'].Major_Activities1,
                mobile: response.data.infor['0'].Mobile,
                email: response.data.infor['0'].Email,
                name: response.data.infor['0'].ngo_name,
                location: response.data.infor.operational_states_db
              }
              callback(null, result);
            })
            .catch(function (error) {
              console.log(error);
            });
          }else{
            callback("NON200", null);
          }
          
        }).catch(err => {
          console.log('Error getting token', err);
          callback("NON200", null);
        });
    },
    GetLastPartOfNGOId: function(ngoId = ""){
      ngoId = ngoId.split(" ").join("");
      if(ngoId.includes('/')){
        let parts = ngoId.split('/');
        return parts[parts.length - 1];
      }
      return ngoId;
    },
    AddNGO: function(address = "", ngoId = "", config, mnemonic, callback){
      let provider = new HDWalletProvider({
        mnemonic: mnemonic.trim(),
        providerOrUrl: "https://rpc-mumbai.matic.today"
      });
      let web3 = new Web3(provider);
      let contract = new web3.eth.Contract(config.abi, config.contractAddress);
      let account = web3.eth.accounts._provider.addresses[0];
      console.log('Eth acccoutn:', account);
      contract.methods.AddNGO(address, ngoId)
        .send({from: account})
        .on("transactionHash", (hash) => {
          console.log('We got result', hash);
          callback(null, hash);
        })
        .on("error", (error, recept) => {
            console.log('Error ', error, recept);
            callback("ERROR", null);
        });
    }
  }