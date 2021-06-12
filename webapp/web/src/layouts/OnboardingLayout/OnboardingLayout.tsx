type OnboardingLayoutProps = {
  children: React.ReactNode
}

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return (
    <>
      <header>Vemidi Onboarding</header>
      <main>{children}</main>
    </>
  )
}

export default OnboardingLayout
