import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import ReactQuill from "react-quill";

import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

import { Post } from "../interfaces/Post";

interface Props {}

const PostDetail: React.FC<Props> = ({}) => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<Post>(() => {
    return {
      id,
      title: "Que Sara Sara",
      body:
        "<h2>Nigga what teh fuck</h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptas earum blanditiis, voluptate id ab minima natus error consequatur, quia, accusantium consectetur architecto ea doloremque tempora. Corporis quisquam incidunt mollitia beatae? Iusto hic exercitationem, aliquam veniam quam expedita est porro? Possimus repudiandae, odit praesentium labore nisi libero nemo. <p> <br><br> Blanditiis, laborum magni vero qui sunt aut tempore deserunt incidunt, quidem quia cupiditate impedit, ipsam reprehenderit optio ad. Architecto molestiae qui ratione deleniti libero, dicta laborum, magnam reiciendis aliquid aut assumenda fuga aperiam amet iste dolore nostrum praesentium molestias ipsa, pariatur fugiat provident quo. Deleniti minima, sunt quas quibusdam cumque voluptatem dolor accusantium tempora eos harum aspernatur, ut esse expedita beatae dolores qui? Ducimus accusantium perferendis asperiores quas eius? Architecto aut earum cum magni laudantium exercitationem. Quo quod voluptatum reprehenderit necessitatibus cupiditate corporis nisi, rem praesentium cum, ut expedita unde voluptate commodi ducimus, ab eum possimus. Iure ratione, nostrum cum distinctio animi temporibus voluptatem aspernatur quaerat ab dolores facilis possimus? Excepturi aspernatur beatae nemo? Beatae labore amet totam qui dolores! Vitae, consequuntur doloribus magni, hic fugiat explicabo similique, aliquam ducimus saepe laboriosam voluptatem! Vitae aliquam similique tempora dicta, temporibus odio rem magni libero itaque, earum velit? Accusantium illum unde blanditiis cum nam aliquid error quos dolore temporibus! Numquam, modi nisi sed quo aliquam doloremque ipsam cupiditate. Repellat reprehenderit officia inventore, corrupti voluptas tempore, magnam corporis, impedit quam nesciunt natus reiciendis. Debitis eos corrupti beatae blanditiis modi tempora, obcaecati at fugit molestias animi quod odio pariatur maxime. Sequi, laudantium eum! Culpa ipsa beatae eius aspernatur laudantium recusandae alias repudiandae aliquid dignissimos molestias incidunt mollitia amet deleniti est assumenda, laboriosam quibusdam iusto, odio harum quia tenetur debitis quos vel? Aliquid incidunt, voluptates beatae commodi mollitia minus sunt soluta velit cum, quaerat nostrum sapiente quidem esse placeat sequi. Pariatur sequi doloribus eos rem a esse cupiditate? Odit, laborum obcaecati aspernatur delectus voluptates velit totam! Amet, sequi et non rem repudiandae iusto, quibusdam, fuga ab officiis ratione quis eos nihil fugiat molestiae perspiciatis maiores ut? Possimus ullam ratione quas tempore doloremque ducimus repudiandae laudantium, eius dignissimos iure aliquam voluptatem facilis commodi ut, velit itaque totam blanditiis voluptate quos harum atque. Distinctio non odio minus maxime odit, perspiciatis ipsa vitae dignissimos commodi nulla sapiente sed consequuntur eligendi iste eum quasi laboriosam, quos omnis tenetur accusamus veniam modi. Earum magnam quis, expedita laborum velit vel temporibus ipsam exercitationem laudantium? Et quaerat possimus incidunt dolorum repellendus, sed hic ad necessitatibus aliquam atque non voluptas saepe totam molestias aspernatur accusantium ab cum fugiat doloremque! Consequuntur, pariatur eos! Quibusdam minima odit, quas quis ipsum consequuntur officiis, quam accusantium inventore atque nostrum, est dignissimos neque. Soluta, rerum dolores iste doloremque ipsum expedita beatae impedit. Adipisci molestias aspernatur illo id iusto quae soluta iure sint alias placeat officia vel itaque odio ullam omnis animi, cumque libero! Cupiditate corrupti sunt rem, nemo tempora natus possimus magni reiciendis libero officia tenetur adipisci cum quaerat non modi ea ullam animi aut dicta nisi. Tempore, eius nostrum reprehenderit rerum, totam laborum cumque molestias sit quaerat, est facilis?",
      courseName: "Lorem ipsum dolor sit",
      created_at: new Date(),
      updated_at: new Date(),
    };
  });

  const [isModified, setIsModified] = useState<boolean>(false);

  useEffect(() => {
    // Data Required
    // interface meh {
    //   postTitle: string;
    //   postBody: string;
    //   courseId: string; // -> courseName: string;
    //   created_at: Date;
    //   updated_at: Date;
    // }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (post.updated_at.getTime() - post.created_at.getTime() > 5000) {
      setIsModified(true);
    }
  }, [post.updated_at, post.created_at]);

  return isLoading ? (
    <h3 className="text-primary-200 text-center">Loading...</h3>
  ) : (
    <div>
      <div className="flex mb-2">
        <div className="flex">
          <h3 className="text-primary-100 my-auto mr-2">{post.title}</h3>
          {isModified && (
            <div className="flex">
              <h4 className="text-primary-300 ml-2"> (Edited)</h4>
            </div>
          )}
        </div>
      </div>
      <div className="flex mb-5">
        <h4 className="text-accent mr-4">{post.updated_at.toDateString()}</h4>
      </div>
      <ReactQuill
        theme="bubble"
        value={post.body}
        readOnly
        className="w-full bg-primary-900 hover:bg-primary-900 text-primary-100 mt-5 focus:outline-none"
      />
    </div>
  );
};

export default PostDetail;
