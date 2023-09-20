import { useEffect, useState } from 'react';

type Props = {
  save: (payload: { title: string; content: string }) => void;
};

const Modal = ({ save }: Props) => {
  const [blog, setBlog] = useState({ title: '', content: '' });

  const handleInput = (name: string, value: string) => {
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    return () => {
      setBlog({ title: '', content: '' });
    };
  }, [setBlog]);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Post a New Blog</h3>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">What is your blog title?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered"
            name="title"
            onChange={(e) => handleInput('title', e.currentTarget.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your blog content</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            name="content"
            onChange={(e) => handleInput('content', e.currentTarget.value)}
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            onClick={() => {
              save(blog);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
