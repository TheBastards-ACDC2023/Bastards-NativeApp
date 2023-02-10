import { httpClient } from "../config";
import { IAnalyzer } from "./analyzer.interface";

const client = httpClient('http://wobba.dyndns.org:7860', {
    "Content-Type": "application/octet-stream",
    /* "Ocp-Apim-Subscription-Key": "6d4fc312ee364cae95701184b7cfe22e",
     "user": '121'*/
});

const Prompt = 'portrait photo of a serious pirate woman, style of the pirate of the caribbean, ((pirate hat)) jolly roger, detailed and intricate, hyper realistic, face tattoo, Greg Rutkowski intricately detailed hyperdetailed, HDR, pirate ship in the background, night time, dark lightning, 50mm';
const negative_prompt = 'skull, death, bones, digital painting, smile, back, signature, ugly, mutilated, extra fingers, extra limbs';

export const AnalyzerAPI = {
    post: async (base64EncodedImage: string) => await (await client.post('/sdapi/v1/img2img', { steps: 40, restore_faces: true, sampler_index: "Euler", init_images: base64EncodedImage, prompt: Prompt, negative_prompt: negative_prompt, model: 'clip' })).data as IAnalyzer[]
}