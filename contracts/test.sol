// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 각 은행은(은행 contract) 예치, 인출의 기능을 가지고 있고 국세청은(정부 contract) 모든 국민의 재산정보를 파악하고 있다. 

// 각 국민은 이름, 각 은행에 예치한 금액으로 이루어진 구조체이다. 

// 이 나라는 1인 1표가 아닌 납부한 세금만큼 투표권을 얻어가는 특이한 나라이다. 

// 특정 안건에 대해서 투표하는 기능도 구현하고 각 안건은 번호, 제안자 이름, 제목, 내용, 찬-반 비율, 상태로 구성되어 있다. 안건이 등록되면 등록, 투표중이면 투표, 5분 동안 투표를 진행하는데 찬-반 비율이 60%가 넘어가면 통과. 60% 가 안되었으면 기각이 된다. 

// 안건은 1이더 이상 세금을 납부한 사람만이 등록할 수 있고, 안건을 등록할 때마다 0.25 이더씩 깎인다. 세금 납부는 갖고 있는 총 금액의 2%를 실시한다.
// (예: 100이더 보유 -> 2이더 납부 -> 안건 2개 등록 -> 1.5 납부로 취급)
contract Bank {
    
    NTS nts;
    constructor(address _a) {
        nts = NTS(_a);
    }

    // 유저정보 (누구한테 얼마있어?)
    mapping(address => uint) userBalance;

    // 예치
    function deposit() public payable {
        userBalance[msg.sender] += msg.value;
    }

    // 인출
    function withdrawal(address requester, uint _w_amount) private  {
        payable(requester).transfer(_w_amount);
    }

    // 고객이 본인 돈 인출
    function withdrawal_User(uint _w_amount) public  {
        require(userBalance[msg.sender] >= _w_amount);
        withdrawal(msg.sender, _w_amount);
        userBalance[msg.sender] -= _w_amount;
    }

    // 조회
    function getBalance(address _user) public view returns(uint) {
        return userBalance[_user];
    }

    // 세금 납부
    function texPay(address _govern) public {
        // 추가 수정
        // amount는 특정 유저의 잔고의 2% amount = userBalance[address] * 0.02
        /*
        2. 특정 시민 지목 (?)
        */
        uint _tax = address(this).balance/50;
        require(msg.sender == address(nts));
        withdrawal(_govern, _tax);
    }
}

contract NTS {
    struct poll {
        uint num;
        address preseneter;
        // string name;
        string title;
        string content;
        uint pros;
        uint cons;
        uint startTime;
        Status status;
    }
    poll[] Polls; // mapping으로 변경?
    Bank[] banks;

    struct citizen {
        address addr; //이름 대용
        uint payedtax;
        // 은행별 예치금
        // 자신이 투표한 혹은 만든 안건들
    }

    enum Status {registered, voting, passed, failed}

    //은행 등록
    function setBank(address _a) public {
        banks.push(Bank(_a));
    }

    //banks length
    function getBankslength() public view returns(uint) {
        banks.length;
    }

    // 안건 등록
    /*
    시점을 설정하고
    */
    function setPoll(string memory _title, string memory _content) public {
        // require(세금 포인트가 0.25보다 많이 남아있어야 함)
        Polls.push(poll(Polls.length+1, msg.sender, _title, _content, 0, 0, block.timestamp, Status.registered));
        // 납부한 세금 포인트 -0.25 ether
    }

    // 안건에 투표
    /*
    위에서 설정한 시점을 특정 조건에 맞게 제한하기
    */
    function votePoll(uint _a, bool pro) public {
        // 투표권수만큼 하기 제한-> 세금 내서 쌓아놓은 포인트 
        if(pro /*pro == true*/) {
            Polls[_a-1].pros++;
        } else {
            Polls[_a-1].cons++;
        }
    }
    // 
}

contract A {
    uint a;
}