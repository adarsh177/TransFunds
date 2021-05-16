<img src="https://i.ibb.co/0mjPDTb/logo.png" alt="TransFund logo">
<h1>TransFunds</h1>

By: Developer's Monk (Adarsh Shrivastava, Abhishek Kumar)<br>
**User-App is live at: https://transfunds.developersmonk.com**
**Ngo-App is live at: https://ngotransfunds.developersmonk.com**

If you want to list your ngo, head to Ngo-App. Else to make donations, head to User-App

Tarnsparent Fund transfer to NGOs. All the NGOs listed here are verified through government website NGODarpan APIs so It is totally genuine

### A Decentralized transparent donation web app using Matic testnet block-chain technology
- User Identity management - using Portis
- Requestion to the Govt. NGODarpan website for data on the basis of Ngo registration number
- List of ngo in the app/Transparent Donations, are the major feature of this web app
- Complete seemless UI and UX


## Techstack Used

 - Portis - Wallet, Providing User Identification
 - Matic - testnet blockchain
 - ReactJS - Frontend
 - Web3.js - to interact with SmartContracts
 - AWS EC2 - hosted react app on it.

 **Run on your own local machine** <br>
	    1. Clone this repository to your local machine.<br>
        2. Go to backend folder.<br>
        3. run command `npm install` to install dependencies.<br>
        4. create secret.json with following structure: 
        {
            "mnemonic": "wallet_mnemonic",
            "email": "email_address",
            "pass": "email_pass_or_accesstoken"
        }
        5. run command `node index.js` start the server.<br>
        6. Open another terminal and go to the `transfunds-user`.<br>
        7. run command `npm install` to install dependencies.<br>
        8. run command `npm start`, That's it you are all good to explore the web app.<br>
 
