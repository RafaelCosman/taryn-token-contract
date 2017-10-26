pragma solidity ^0.4.15;

contract AccessControlled {
  address public owner = msg.sender;
  
  /**
   * @dev Throws if called by any account other than the argument. 
   */
  modifier onlyBy(address _account)
  {
    require(msg.sender == _account);
    _;
  }
  
  /**
   * @dev Throws if called by any account other than either of the two arguments. 
   */
  modifier onlyByOr(address _account1, address _account2)
  {
    require(msg.sender == _account1 || msg.sender == _account2);
    _;
  }

  /**
   * @dev Throws if called by any account other than the owner. 
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }
}