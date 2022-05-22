// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract EmergencyStopPattern {
  bool isStopped = false;

  modifier stoppedInEmergency {
    require(!isStopped);
    _;
  }

  function stopContract() public {
    isStopped = true;
  }

  function resumeContract() public {
    isStopped = false;
  }

  function something() public stoppedInEmergency { 
    // Deposit logic happening here
  }
}