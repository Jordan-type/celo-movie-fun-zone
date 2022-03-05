// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);
    function approve(address, uint256) external returns (bool);
    function transferFrom(address, address, uint256) external returns (bool);
    function totalSupply() external view returns (uint256);
    function balanceOf(address) external view returns (uint256);
    function allowance(address, address) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }
}

contract Marketplace {
    uint internal productsLength = 0;
    address internal cUSDTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;
    address public adminAddress;

    using SafeMath for uint;

    struct Product {
        address payable owner;
        string name;
        string image;
        string description;
        uint price;
        uint sold;
        bool verified;
    }

    constructor() {
        adminAddress = msg.sender;
    }

    modifier isVerified(uint _index) {
        require(products[_index].verified, "This Product is not verified");
        _;
    }

    modifier isAdmin() {
        require(msg.sender == adminAddress, "Only admin can perform this action");
        _;
    }

    mapping (uint => Product) public products;

    /**
        * @dev Adds a new product to the marketplace.
        * @param _name name of the product
        * @param _image image of the product
        * @param _description description of the product
        * @param _price price of the product
     */ 
    function writeProduct (string memory _name, string memory _image, string memory _description, uint _price) public {
       require(bytes(_image).length > 0, "Please enter a valid Image URL");
       require(bytes(_description).length > 0, "Please enter a valid Description");
       require(bytes(_name).length > 0, "Please enter a valid Name");
       require(_price > 0, "Please enter a valid Price");
       uint _sold = 0;
       bool _verified = false;

       products[productsLength] = Product(payable(msg.sender), _name, _image, _description, _price, _sold, _verified);
       // productsLength++;
       productsLength = productsLength.add(1);
    }

    /**
        * @dev Allows an admin to verify a product.
        * @param _index index of the product
     */
    function verifyProduct(uint _index) public isAdmin {
        products[_index].verified = true;
    }

    /**
        * @dev Function to get the length of products
     */
    function getProductsLength() public view returns (uint) {
        return (productsLength);
    }

    /**
        * @dev Function to buy a product
        * @param _index index of the product
     */
    function buyProduct(uint _index) public payable isVerified(_index) {
        require(products[_index].owner != address(0), "You cannot buy your own product");
        require(IERC20Token(cUSDTokenAddress).transferFrom(msg.sender, products[_index].owner, products[_index].price), "You don't have enough tokens");

        products[_index].sold = products[_index].sold.add(1);
    }

     /**
        * @dev Allows an admin to revoke ownership 
        * @param _address address of the owner
      */
    function revokeOwnership(address _address) public isAdmin {
        require(msg.sender == adminAddress, "Only admin can perform this action");
        adminAddress = _address;
    }  
}