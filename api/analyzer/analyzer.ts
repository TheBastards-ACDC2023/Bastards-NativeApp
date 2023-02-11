import { httpClient } from "../config";
import { IAnalyzer } from "./analyzer.interface";
import { Buffer } from "buffer";
const username = 'bastards';
const password = 'acdc23';
const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

const client = httpClient('http://wobba.dyndns.org:7860', {
   // 'Host': 'http://wobba.dyndns.org', 
    'Authorization': auth
});

const Prompt = 'portrait photo of a man, 50mm'

export const AnalyzerAPI = {
    post: async (base64EncodedImage: string) => await (await client.post('/sdapi/v1/txt2img', {  steps: 40, restore_faces: true, sampler_index: "DDIM",  prompt: Prompt })).data as IAnalyzer[]
}