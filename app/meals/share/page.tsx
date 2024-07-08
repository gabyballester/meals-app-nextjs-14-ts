"use client";

import { shareMeal } from "@/lib/actions";
import { ImagePicker, SubmitButton } from "@/components/meals";

import classes from "./page.module.css";

export default function ShareMealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input
                defaultValue={"Gabi"}
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input
                defaultValue={"gaby@sample.es"}
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input
              defaultValue={"Cruise"}
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input
              defaultValue={"Image of a cruise"}
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              defaultValue={"1. Go\r\n2. Hop on \r\n3. Enjoy "}
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label={"Your image"} name={"image"} />
          <p className={classes.actions}>
            <SubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
