declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blocks": {
"1.mdx": {
  id: "1.mdx",
  slug: "1",
  body: string,
  collection: "blocks",
  data: any
},
"2.mdx": {
  id: "2.mdx",
  slug: "2",
  body: string,
  collection: "blocks",
  data: any
},
},
"callouts": {
"1.mdx": {
  id: "1.mdx",
  slug: "1",
  body: string,
  collection: "callouts",
  data: any
},
},
"clients": {
"aa-cars.md": {
  id: "aa-cars.md",
  slug: "aa-cars",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"abc.md": {
  id: "abc.md",
  slug: "abc",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"ap.md": {
  id: "ap.md",
  slug: "ap",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"axa-health.md": {
  id: "axa-health.md",
  slug: "axa-health",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"bauer-media.md": {
  id: "bauer-media.md",
  slug: "bauer-media",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"bbc.md": {
  id: "bbc.md",
  slug: "bbc",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"bfi.md": {
  id: "bfi.md",
  slug: "bfi",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"bt-sport.md": {
  id: "bt-sport.md",
  slug: "bt-sport",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"collinson.md": {
  id: "collinson.md",
  slug: "collinson",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"consumer.md": {
  id: "consumer.md",
  slug: "consumer",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"dk.md": {
  id: "dk.md",
  slug: "dk",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"experian.md": {
  id: "experian.md",
  slug: "experian",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"fscs.md": {
  id: "fscs.md",
  slug: "fscs",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"good-food-guide.md": {
  id: "good-food-guide.md",
  slug: "good-food-guide",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"hearst.md": {
  id: "hearst.md",
  slug: "hearst",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"homes-communities-agency.md": {
  id: "homes-communities-agency.md",
  slug: "homes-communities-agency",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"jato.md": {
  id: "jato.md",
  slug: "jato",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"lexis-nexis.md": {
  id: "lexis-nexis.md",
  slug: "lexis-nexis",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"lloyds.md": {
  id: "lloyds.md",
  slug: "lloyds",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"met-service.md": {
  id: "met-service.md",
  slug: "met-service",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"news-corp.md": {
  id: "news-corp.md",
  slug: "news-corp",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"nhs.md": {
  id: "nhs.md",
  slug: "nhs",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"nzz.md": {
  id: "nzz.md",
  slug: "nzz",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"penguin-random-house.md": {
  id: "penguin-random-house.md",
  slug: "penguin-random-house",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"publica.md": {
  id: "publica.md",
  slug: "publica",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"rothamsted-research.md": {
  id: "rothamsted-research.md",
  slug: "rothamsted-research",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"sky-news.md": {
  id: "sky-news.md",
  slug: "sky-news",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"sntv.md": {
  id: "sntv.md",
  slug: "sntv",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"sp-global-platts.md": {
  id: "sp-global-platts.md",
  slug: "sp-global-platts",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"spotlight.md": {
  id: "spotlight.md",
  slug: "spotlight",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"telstra.md": {
  id: "telstra.md",
  slug: "telstra",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"the-new-zealand-herald.md": {
  id: "the-new-zealand-herald.md",
  slug: "the-new-zealand-herald",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"the-telegraph.md": {
  id: "the-telegraph.md",
  slug: "the-telegraph",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"times-sunday-times.md": {
  id: "times-sunday-times.md",
  slug: "times-sunday-times",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
"travel-republic.md": {
  id: "travel-republic.md",
  slug: "travel-republic",
  body: string,
  collection: "clients",
  data: InferEntrySchema<"clients">
},
},
"manifesto": {
"01.md": {
  id: "01.md",
  slug: "01",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"02.md": {
  id: "02.md",
  slug: "02",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"03.md": {
  id: "03.md",
  slug: "03",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"04.md": {
  id: "04.md",
  slug: "04",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"05.md": {
  id: "05.md",
  slug: "05",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"06.md": {
  id: "06.md",
  slug: "06",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"07.md": {
  id: "07.md",
  slug: "07",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"08.md": {
  id: "08.md",
  slug: "08",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"09.md": {
  id: "09.md",
  slug: "09",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
"10.md": {
  id: "10.md",
  slug: "10",
  body: string,
  collection: "manifesto",
  data: InferEntrySchema<"manifesto">
},
},
"pages": {
"404.mdx": {
  id: "404.mdx",
  slug: "404",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"about.mdx": {
  id: "about.mdx",
  slug: "about",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"business-engines.mdx": {
  id: "business-engines.mdx",
  slug: "business-engines",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"experience-mapping.mdx": {
  id: "experience-mapping.mdx",
  slug: "experience-mapping",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"foo.mdx": {
  id: "foo.mdx",
  slug: "foo",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"futurestate-design.mdx": {
  id: "futurestate-design.mdx",
  slug: "futurestate-design",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"futurestate-manifesto.mdx": {
  id: "futurestate-manifesto.mdx",
  slug: "futurestate-manifesto",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"manifesto.mdx": {
  id: "manifesto.mdx",
  slug: "manifesto",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"start-up.mdx": {
  id: "start-up.mdx",
  slug: "start-up",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"styles.mdx": {
  id: "styles.mdx",
  slug: "styles",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"the-next-twenty.mdx": {
  id: "the-next-twenty.mdx",
  slug: "the-next-twenty",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"work.mdx": {
  id: "work.mdx",
  slug: "work",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
},
"podcasts": {
"4.mdx": {
  id: "4.mdx",
  slug: "4",
  body: string,
  collection: "podcasts",
  data: any
},
"6.mdx": {
  id: "6.mdx",
  slug: "6",
  body: string,
  collection: "podcasts",
  data: any
},
},
"testimonials": {
"1.mdx": {
  id: "1.mdx",
  slug: "1",
  body: string,
  collection: "testimonials",
  data: any
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
