
import { PipeTransform, Pipe } from "@angular/core";
 
@Pipe({
    name:'sectionFilter'
})
export class SectionFilterPipe implements PipeTransform{

    
    transform(sectionsData :any[],serachBySection:String) {

        if(!sectionsData || !serachBySection){
            return sectionsData;
        }
        var arr:any[] =  sectionsData.filter(section =>{
            return section.sectionName.toLowerCase().includes(serachBySection.toLowerCase())  })
            // console.log("arr",arr)
            return arr;
    }
}
