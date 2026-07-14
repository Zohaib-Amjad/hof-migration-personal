type Props = {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params

  return (
    <div className="container mx-auto px-4 py-12">
      {/* TODO: content */}
      <h1 className="text-3xl font-semibold">Case Study: {slug}</h1>
    </div>
  )
}
