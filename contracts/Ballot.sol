// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "./Token.sol";
import "./Team.sol";

contract Ballot is Team {
    struct poll {  // struct 안건. (몇번째 안건인지, 안건이름, 안건에 걸린 포인트)로 구성.
        uint number;
        string title;
        uint token;
    }
    uint pollNum; // 몇번째 안건인지. index라고 보면됨.
    mapping(uint => poll) Polls;
    uint tokenSum; // 토큰 총 공급량

    function setPoll(string memory _title) public { // 투표 설정하기 => poll(몇번째투표인지, 투표이름, 그 투표에 걸린 토큰)
        Polls[pollNum+1] = poll(pollNum+1, _title, 0);
        pollNum+=1;
    }

    function setPoint(uint _num, uint _tpe) public { // _num : 몇번째 안건인지, _tpe : 그 안건에 토큰 몇개 걸지
        Polls[_num].token = _tpe;
        tokenSum = tokenSum - _tpe;
    }

    function getPoll(uint _num) public view returns(uint, string memory, uint) {
        return (Polls[_num].number, Polls[_num].title, Polls[_num].token);
    }

    address leader;

    constructor(string memory _subject, uint _token, string memory _name) public Team(_subject, _token, _name){ // _subject : 과목명, _token : 몇개 발행할지, _name : 팀 만드는 본인 이름
        MT = new MyToken(_token);
        tokenSum = MT.getTotalSupply();
        leader = msg.sender;
    }

    function getTotal() public view returns(uint) {  // 토큰 총 공급량
        return MT.getTotalSupply();
    }

    function getUserToken() public view returns(uint) {  // 인당 토큰 몇 개 받을지
        return Team.Users[msg.sender].token;
    }

    function setTeam(string memory _teamName) public { // 팀 설정(수업명, 팀번호, 팀이름, 팀멤버주소, 안건개수, 토큰총발행량)
        Teams[teamNum+1] = team(subject, teamNum+1, _teamName, teamMember, pollNum, MT.getTotalSupply());
        teamNum+=1;
    }

    mapping(address => uint) voting; // 해당 지갑주소인 사람이 몇 표를 얻었는지

    function vote(uint _point, address _addr) public returns(uint) { // _addr : 누구에게, _point : 몇개를 투표할지
        voting[_addr] += _point;
        Team.Users[msg.sender].point -= _point;
        return Team.Users[msg.sender].point;
    }

    function getVote(address _addr) public view returns(uint) { // 누가 몇표를 받았는지 알 수 있음
        return voting[_addr];
    }

    function ranking() public returns(address[] memory) { // 투표 많이 받은 순으로 저장된 배열 출력
        for(uint i; i<Team.teamMember.length-1; i++) {
            for(uint j=i+1; j<Team.teamMember.length; j++) {
                if(voting[Team.teamMember[i]] < voting[Team.teamMember[j]]) {
                    (Team.teamMember[i], Team.teamMember[j]) = (Team.teamMember[j], Team.teamMember[i]);
                }
            }
        }

        return Team.teamMember;
    }

    uint index=1;

    function getToken() public { // 1등한테 안건에 달린 토큰을 지급하고 받은 투표수 초기화, 각 사람마다 투표에 쓸 수 있는 포인트 100으로 초기화 + 팀장은 20포인트 더 줌.
        Team.Users[Team.teamMember[0]].token += Polls[index].token;
        index++;
        for(uint i; i<Team.teamMember.length; i++) {
            voting[Team.teamMember[i]] = 0;
            Team.Users[teamMember[i]].point = 100;
        }
        Team.Users[leader].point += 20;
    }
}