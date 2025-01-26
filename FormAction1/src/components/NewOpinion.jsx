import { useActionState, use } from 'react';
import { OpinionsContext } from '../store/opinions-context';

const isNotEmpty = (value) => value.trim() !== '';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  const shareOpinionAction = async (prevFormState, formData) => {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    const errors = [];

    if (!isNotEmpty(userName)) {
      errors.push('Enter a User Name');
    }

    if (title.trim().length < 5) {
      errors.push('Title must be at least five character');
    }

    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push('Body must be at from 10 to 300 characters');
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }

    await addOpinion({ title, userName, body });

    return {
      errors: null,
    };
  };

  const [formState, formAction, pending] = useActionState(shareOpinionAction, {
    errors: null,
  });

  const { enteredValues } = formState;

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={enteredValues?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="error">
            {formState.errors.map((error) => {
              return <li key={error}>{error}</li>;
            })}
          </ul>
        )}

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
