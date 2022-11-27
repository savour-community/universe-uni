import { createEthAddress, signEthTransaction, importEthAddress } from "./eth"
import { Decrypt, Encrypt }  from "../secret"
import {generateMnemonic, encodeMnemonic, decodeMnemonic, mnemonicToSeed, validateMnemonic } from "./bip/bip"

// const BitcoinSeries = ["btc", "ltc", "bsv"];
const EthereumSeries = ["eth", "etc", "bsc", "heco", "polygon", "avax-c", "arbi", "op", "zksync", "metis", "boba", "ethereum", "arbitrum"];
// const CosmosSeries = ["atom", "scrt", "bnb"];
// const EosSeries = ["eos", "waxp"];
// const SolanaSeries = ["sol"]

/*
 *  Aes 加密函数
 */
export function AesEncrypt(value, key) {
    return Encrypt(value, key)
}

/*
 *  Aes 解密函数
 */
export function AesDecrypt(value, key) {
    return Decrypt(value, key)
}

/*
 * 生成助记词
 */
export function CreateMnemonic(params){
    return generateMnemonic(params)
}

/*
 * 助记词序列化
 */
export function EncodeMnemonic(params) {
    return encodeMnemonic(params)
}

/*
 * 助记词反序列化
 */
export function DecodeMnemonic(params) {
    return decodeMnemonic(params)
}

/*
 * 助记词生成种子
 */
export function MnemonicToSeed(params) {
    return mnemonicToSeed(params)
}


/*
 * 验证助记词
 */
export function ValidateMnemonic(params) {
    return validateMnemonic(params)
}

/*
 * 生成地址函数
 * @seedHex: 助记词的 seedHex
 * @chain: 链名称
 * @index: 地址索引
 * @receiveOrChange: BTC 是否生成找零地址
 * @network: btc 生成不同格式的地址参数
 */
export function CreateAddress(params) {
    const {seedHex, chain, index, receiveOrChange, network }  = params
    // eth 系列币种
    if (EthereumSeries.includes(chain)) {
        return createEthAddress(seedHex, index)
    }
}

/*
 *  签名函数
 *  @params: 签名需要传入的参数
 */
export function SignTransaction(chain, params) {
    // eth 系列币种
    if (EthereumSeries.includes(chain)) {
        return signEthTransaction(params)
    }
}


export function PrivateKeyToAddress(chain, params) {
    // eth 系列币种
    if (EthereumSeries.includes(chain)) {
        return importEthAddress(params)
    }
}




