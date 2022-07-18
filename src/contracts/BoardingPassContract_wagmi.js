import { useContractWrite } from 'wagmi'
import boardingPass from "./BlackBoxCollectiveBoardingPass.json"


export function BoardingPassContract(txInfo) {
    const contractAddr = "0x8dA95FC89626182eC5C36EFE9dF9D96f7BFE82AE";
    const { write } = useContractWrite({
        addressOrName: contractAddr,
        contractInterface: boardingPass.abi,
        functionName: 'mintBoadingPass'
    })
    return <button onClick={() => write(txInfo)}>Mint Boarding Pass</button>
}

