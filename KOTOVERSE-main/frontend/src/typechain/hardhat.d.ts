/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "MarketPlace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketPlace__factory>;
    getContractFactory(
      name: "NovelContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NovelContract__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "MarketPlace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketPlace>;
    getContractAt(
      name: "NovelContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NovelContract>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
