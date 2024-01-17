//SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

contract Tracker {

    struct Status{
        string name;
        string desc;
        string lat;
        string long;
    }

    mapping(string => Status[]) public Journey;

    function addStatus(string memory productID, string memory name, string memory desc, string memory lat, string memory long) public {
        Journey[productID].push(
            Status(
                name, desc, lat, long
            )
        );
    }

    function track(string memory productID) public view returns(Status[] memory){
        return Journey[productID];
    }

}
