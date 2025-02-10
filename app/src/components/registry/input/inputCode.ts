import type { ComponentCode } from "@/types/index";

export const codeInputs: ComponentCode = {
    'input/Leading':{
        lang:"html",
        name:"index.html", 
        code:`
<form class="space-y-4 w-full text-body">
    <div class="relative">
        <input type="text" placeholder="Your email here" class="form-input form-input-md form-input-bordered input-placeholder-lighter bg-body ps9 rd-md">
        <span aria-hidden="true" class="absolute left-3 h-full flex items-center top-0 text-body pointer-events-none">
            <span class="flex text-lg i-ph-user"></span>
        </span>
    </div>
    <div class="relative">
        <input type="text" placeholder="Your email here" class="form-input form-input-md form-input-bordered input-placeholder-lighter ps11 bg-body rd-md">
        <span aria-hidden="true" class="absolute text-sm left-3 h-full flex items-center top-0 text-body pointer-events-none">
            CDF
        </span>
    </div>
    <div class="relative">
        <input type="text" placeholder="Your email here" class="form-input form-input-md form-input-bordered input-placeholder-lighter ps16 bg-body rd-md">
        <span aria-hidden="true" class="absolute text-sm left-3 h-full flex items-center top-0 text-body pointer-events-none">
            https://
        </span>
    </div>
    <div class="flex">
        <span aria-hidden="true" class="px3 flex items-center text-body form-input-gray rd-l-md bdr_y bdr_l pointer-events-none">
            <span class="flex text-lg i-ph-user"></span>
        </span>
        <input type="text" placeholder="Your email here" class="form-input form-input-md form-input-bordered input-placeholder-lighter  bg-body rd-r-md">
    </div>
</form>`
    },
    'input/Trailing':{
        lang:"html",
        name:"index.html", 
        code:`
<form action="" class="space-y-4 w-full text-body">
    <div class="relative">
        <input type="text" placeholder="Your email here" class="form-input form-input-md form-input-bordered input-placeholder-lighter pe9 bg-body rd-md">
        <span aria-hidden="true" class="absolute right-3 h-full flex items-center top-0 text-body pointer-events-none">
            <span class="flex text-lg i-ph-user"></span>
        </span>
    </div>
    <div class="relative">
        <input type="text" placeholder="Your email here" class="form-input form-input-md form-input-bordered input-placeholder-lighter pe11 bg-body rd-md">
        <span aria-hidden="true" class="absolute text-sm right-3 h-full flex items-center top-0 text-body pointer-events-none">
            CDF
        </span>
    </div>
    <div class="relative">
        <input type="text" placeholder="Your email here" class="form-input form-input-md form-input-bordered input-placeholder-lighter pe24 bg-body rd-md">
        <span aria-hidden="true" class="absolute text-sm right-3 h-full flex items-center top-0 text-body pointer-events-none">
            @gmail.com
        </span>
    </div>
    <div class="flex">
        <input type="text" placeholder="Your email here" class="form-input form-input-md form-input-bordered input-placeholder-lighter bg-body rd-l-md">
        <span aria-hidden="true" class="px3 flex items-center text-body form-input-gray rd-r-md bdr_y bdr_r pointer-events-none">
            <span class="flex i-ph-user"></span>
        </span>
    </div>
</form>`
    },
}