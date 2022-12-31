// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "./Token.sol";
import "./Team.sol";

contract Ballot is Team {
    struct poll {
        uint number;
        string title;
        uint token;
    }
    uint pollNum;
    mapping(uint => poll) Polls;
    uint tokenSum;

    function setPoll(string memory _title) public {
        Polls[pollNum+1] = poll(pollNum+1, _title, 0);
        pollNum+=1;
    }

    function setToken(uint _num, uint _tpe) public {
        Polls[_num].token = _tpe;
    }

    function getPoll(uint _num) public view returns(uint, string memory, uint) {
        return (Polls[_num].number, Polls[_num].title, Polls[_num].token);
    }

    string subjectName;
    uint totalToken;
    string leader;

    constructor(string memory _subject, uint _token, string memory _name) public Team(subjectName, totalToken, leader){
        subjectName = _subject;
        totalToken = _token;
        MT = new MyToken(totalToken);
        leader = _name;
    }

    function getTotal() public view returns(uint) {
        return MT.getTotalSupply();
    }

    function getUser() public view returns(uint) {
        return Team.Users[msg.sender].token;
    }
}