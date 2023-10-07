import Button from "components/shared/button";
import { ButtonVariant } from "types/buttons";

import styles from "./styles.module.scss";

const Hero = (): JSX.Element => {
  return (
    <div className={styles.heroWrapper}>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl py-20 sm:py-48 lg:py-56">
          <div className="grid grid-cols-1 gap-y-10 sm:gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Launch, manage & scale your vehicle sharing service
              </h1>
              <div className="mt-10 flex items-center gap-x-6">
                <Button
                  href="https://www.wundermobility.com/"
                  target="_blank"
                  variant={ButtonVariant.Tertiary}
                >
                  Get in touch
                </Button>
              </div>
            </div>

            <img
              src="https://uploads-ssl.webflow.com/642d3960aa79a9df04fee214/645223543d285fd0bf4952f1_2afg4ljdqnkxzfiveawhjb-0476a35a5afaf9c8936b0e07e70c626e-home-alpha.svg"
              alt="Animated product collage"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
