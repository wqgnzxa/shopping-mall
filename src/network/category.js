import { request2 } from "./request";
//左侧导航
export function getCategoryLeftNav() {
    return request2({
        url: "/category",
    });
}

export function getCategoryRightImg(maitKey) {
    return request2({
        url: "/subcategory",
        params: {
            maitKey,
        },
    });
}

export function getCategoryRightList(miniWallkey, type) {
    return request2({
        url: "/subcategory/detail",
        params: {
            miniWallkey,
            type,
        },
    });
}