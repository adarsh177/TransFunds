// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TransFUNDS{
    address owner;
    string[] ngoIds;
    address[] ngoAddresses;
    mapping(string => uint) totalDonations;
    mapping(string => uint) availableDonations;
    uint totalNGOs;

    event Transaction(
        address indexed from,
        address indexed to,
        uint amount,
        string note
    );

    constructor(){
        owner = msg.sender;
        totalNGOs = 0;
    }

    // add NGO or to edit NGOs address
    function AddNGO(address ngo_address, string memory ngoId) public {
        if(owner != msg.sender)
            revert("Not Allowed");
        
        uint matchIndex = 0;
        for(uint i = 0; i < totalNGOs; i++){
            if(compareStrings(ngoIds[i], ngoId)){
                matchIndex = 1 + i;
                break;
            }
        }

        if(matchIndex == 0){
            // new ngo
            ngoIds.push(ngoId);
            ngoAddresses.push(ngo_address);
            totalNGOs++;
        }else{
            // old ngo, only editing address
            ngoAddresses[matchIndex - 1] = ngo_address;
        }
    }

    function getOwner() public view returns(address){
        return owner;
    }

    // withdraws money and  returns remaining available
    function WithdrawMoney(uint amount, string memory purpose) public returns (uint){
        string memory id;
        bool isFound = false;
        (isFound, id) = getNGOIdFromAddress(msg.sender);

        if(!isFound)
            revert("NGO Not registered");

        if(availableDonations[id] < amount)
            revert("Cannot withdraw more than available");
        
        if(compareStrings(purpose, "")){
            revert("Purpose cannot be empty");
        }

        payable(msg.sender).transfer(amount);
        availableDonations[id] -= amount;
        emit Transaction(owner, msg.sender, amount, purpose);

        return availableDonations[id];
    }

    // returns total donation of ngo
    function GetTotalDonationOfNGO(string memory ngoId) public view returns(uint){
        address ngoAddress;
        bool isFound = false;
        (isFound, ngoAddress) = getNGOAddressFromId(ngoId);

        if(!isFound)
            revert("NGO Not registered");
        
        return totalDonations[ngoId];
    }

    // returns available donation of ngo, to be called by ngo itself
    function GetAvailableDonationOfNGO() public view returns(uint){
        string memory ngoId;
        bool isFound = false;
        (isFound, ngoId) = getNGOIdFromAddress(msg.sender);

        if(!isFound)
            revert("No NGO registered with this address");
        
        return availableDonations[ngoId];
    }

    function DonateToNGO(string memory ngoId) public payable{
        address ngoAddress;
        bool isFound = false;
        (isFound, ngoAddress) = getNGOAddressFromId(ngoId);

        if(!isFound)
            revert("NGO Not registered");
        
        totalDonations[ngoId] += msg.value;
        availableDonations[ngoId] += msg.value;
    }

    // returns arrays of name
    function GetNGOList() public view returns(string[] memory){
        return ngoIds;
    }

    function getNGOAddressFromId(string memory id) internal view returns(bool, address){
        uint matchIndex = 0;
        for(uint i = 0; i < totalNGOs; i++){
            if(compareStrings(ngoIds[i], id)){
                matchIndex = 1 + i;
                break;
            }
        }

        if(matchIndex == 0){
            return(false, address(0));
        }else{
            return(true, ngoAddresses[matchIndex - 1]);
        }
    }

    function getNGOIdFromAddress(address ngo_address) internal view returns(bool, string memory){
        uint matchIndex = 0;
        for(uint i = 0; i < totalNGOs; i++){
            if(ngoAddresses[i] == ngo_address){
                matchIndex = 1 + i;
                break;
            }
        }

        if(matchIndex == 0){
            return(false, "");
        }else{
            return(true, ngoIds[matchIndex - 1]);
        }
    }

    function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

}
