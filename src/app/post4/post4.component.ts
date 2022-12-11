import {Component} from "@angular/core"
@Component({
    selector:'app-post4',
    template:`
    <div class="post4">
        <h2>Post title Only template!!!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolores cum eveniet ad velit ratione pariatur adipisci ullam in, soluta nemo! Autem nam omnis animi quod sequi, nisi aliquam voluptatem qui.</p>
    </div>
    `,
    styles:[`
        .post4{
            padding:.5rem;
            border:2px dashed black;
            
       
        }
             h2 {
              font-size:1rem;
            }
    `]
})
export class Post4Component{

}