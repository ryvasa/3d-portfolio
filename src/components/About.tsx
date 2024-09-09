import { useContext, useEffect, useRef, useState } from 'react';
import { SectionContext } from '../utils/context';
import { useScroll } from '../utils/hooks/useSchroll';

const About = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { state, dispatch } = useContext(SectionContext);

  useScroll(setIsVisible, aboutRef);

  useEffect(() => {
    if (isVisible) {
      console.log('Dispatching about section');
      dispatch({ section: 'about' });
    }
  }, [isVisible, dispatch]);

  // Observe and log state changes
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="relative">
      <div className="w-full -top-10 bg-gradient-to-b from-primary-dark/0 via-primary-dark to-primary-dark absolute min-h-20"></div>
      <div
        className="bg-primary-dark pt-10 text-font-primary"
        ref={aboutRef}
        id="about"
      >
        <div className="w-full flex justify-center items-center">
          <div className="lg:w-4/5 w-full flex justify-center items-center gap-4 ">
            <div className="flex-1">
              <p>
                Corporis doloribus quidem minus accusantium! Cupiditate nulla
                veniam sapiente! Suscipit rem sapiente sit magni alias
                accusantium pariatur amet voluptas autem perspiciatis minima
                aliquam possimus, natus veritatis tenetur obcaecati iste vel
                impedit ab! Fuga nulla voluptatum natus vero impedit animi
                dolores ut in aliquid illum vitae maiores, blanditiis incidunt
                ipsam ea perspiciatis sapiente! Cupiditate illo at culpa earum,
                provident nobis natus fugiat voluptatibus, voluptates modi illum
                architecto veniam delectus numquam necessitatibus tempore
                corrupti, ab maiores sunt dolorum excepturi? Quaerat itaque
                quasi sunt, error id cupiditate fugit.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque alias ipsa quasi tenetur nobis officiis eius.
                  Inventore, fuga repellat animi dicta ullam totam, quia eos
                  minima adipisci quidem modi ipsum ut earum vero ex impedit
                  nisi. Facilis nobis debitis laboriosam?
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque alias ipsa quasi tenetur nobis officiis eius.
                  Inventore, fuga repellat animi dicta ullam totam, quia eos
                  minima adipisci quidem modi ipsum ut earum vero ex impedit
                  nisi. Facilis nobis debitis laboriosam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
