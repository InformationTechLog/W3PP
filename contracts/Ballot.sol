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
        tokenSum = tokenSum - _tpe;
    }

    function getPoll(uint _num) public view returns(uint, string memory, uint) {
        return (Polls[_num].number, Polls[_num].title, Polls[_num].token);
    }

    address leader;

    constructor(string memory _subject, uint _token, string memory _name) public Team(_subject, _token, _name){
        MT = new MyToken(_token);
        tokenSum = MT.getTotalSupply();
        leader = msg.sender;
    }

    function getTotal() public view returns(uint) {
        return MT.getTotalSupply();
    }

    function getUserToken() public view returns(uint) {
        return Team.Users[msg.sender].token;
    }

    function setTeam(string memory _teamName) public {
        Teams[teamNum+1] = team(subject, teamNum+1, _teamName, teamMember, pollNum, MT.getTotalSupply());
        teamNum+=1;
    }

    mapping(address => uint) voting;

    function vote(uint _token, address _addr) public returns(uint) {
        voting[_addr] += _token;
        Team.Users[msg.sender].token -= _token;
        return Team.Users[msg.sender].token;
    }

    function getVote(address _addr) public view returns(uint) {
        return voting[_addr];
    }

    address ranker = leader;

    function ranking() public returns(address) {
        for(uint i; i<Team.Teams[1].addr.length+1; i++) {
            if(voting[ranker] > voting[Team.Teams[1].addr[i+1]]) {
                ranker;
            } else {
                ranker = Team.Teams[1].addr[i+1];
            }
        }

        return ranker;

        // Team.Teams[1].addr[i]
    }

    function what() public view returns(address) {
        return Team.Teams[1].addr[0];
    }
}