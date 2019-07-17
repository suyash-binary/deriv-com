import React, { Component } from 'react'
import PropTypes from 'prop-types'
import matchSorter from 'match-sorter'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl, LocalizedLink } from '../components/localization'
import Container from '../components/containers/container'
import { Header, Text, LinkText } from '../components/elements/typography'
import SearchIcon from 'images/svg/search.svg'
import CrossIcon from 'images/svg/cross.svg'

const WhoCanOpenAnAccount = () => (
    <>
        <Text>
            {localize(
                'You may only open an account with us on these conditions:',
            )}
        </Text>
        <Ul>
            <Li>
                {localize(
                    'You have read the Legal Terms and Conditions in full.',
                )}
            </Li>
            <Li>
                {localize(
                    'You understand that you will be buying and selling financial contracts subject to these terms and conditions.',
                )}
            </Li>
            <Li>
                {localize(
                    'You have read our privacy statement and give us your consent to process your personal information.',
                )}
            </Li>
            <Li>
                {localize(
                    'You are over 18 years of age, unless you are an Estonian resident whereby you would have to be over 21.',
                )}
            </Li>
            <Li>
                {localize(
                    'You are not resident in a restricted country such as Canada, Costa Rica, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, United Arab Emirates, USA or any other restricted country which has been identified by the Financial Action Task Force (FATF) as having strategic deficiencies.',
                )}
            </Li>
            <Li>
                {localize(
                    'You have enough experience and knowledge in financial trading to be able to evaluate the merits and risks of acquiring financial contracts via this site. You have not relied on any information contained in this site to make that evaluation.',
                )}
            </Li>
        </Ul>
    </>
)

const OpeningAnAccount = () => (
    <>
        <Text>
            {localize('There are three ways to open an account. You can')}
        </Text>
        <Ol>
            <Li>
                {localize(
                    'Enter your email address on the homepage and click “Create free account”',
                )}
            </Li>
            <Li>{localize('Create an account with your Google login')}</Li>
            <Li>{localize('Create an account with your Facebook login')}</Li>
        </Ol>
        <Text>
            {localize(
                'You will have a practice account to start with. You can upgrade to a real money account after opening a practice account.',
            )}
        </Text>
    </>
)

const ChangingPersonalDetails = () => (
    <Text>
        {localize(
            'If you’d like to change your name, date of birth, country of residence, or email address, please submit a ticket and attach your proof of identity and proof of address.',
        )}
    </Text>
)

const RecoveringYourPassword = () => (
    <>
        <Text>
            {localize(
                'If you can’t remember your password, you can reset it by following these steps:',
            )}
        </Text>
        <Ol>
            <Li>{localize('Go to the login page.')}</Li>
            <Li>
                {localize(
                    'Click on the "Reset your password link" near the bottom of the page.',
                )}
            </Li>
            <Li>
                {localize(
                    'Enter your email address. You’ll receive a verification link in your inbox.',
                )}
            </Li>
            <Li>
                {localize(
                    'Click on the verification link to set your new password.',
                )}
            </Li>
        </Ol>
        <Text>
            {localize(
                'If you have a real money account, you must also check the box labelled "I have a Real Money Account" and verify your date of birth.',
            )}
        </Text>
    </>
)

const AuthenticatingYourAccount = () => (
    <Text>
        {localize('Authenticate your account on the verification page.')}
    </Text>
)

const MakingADeposit = () => (
    <>
        <Text>
            {localize(
                'Click on the Cashier tab and choose your preferred deposit method.',
            )}
        </Text>
        <Text>
            {localize(
                'Our list of supported payment methods includes bank wire, credit/debit cards, e-wallets, and cryptocurrencies.',
            )}
        </Text>
        <Text>
            {localize(
                'You may also manage your funds through a payment agent if the service is available in your country.',
            )}
        </Text>
        <Text>
            {localize(
                'You can deposit or withdraw a minimum of USD/EUR/GBP/AUD 5 using e-wallets. Other payment methods will have different minimum amounts. These amounts are stated on the payment methods page.',
            )}
        </Text>
    </>
)

const ExpiredVerificationLink = () => (
    <>
        <Text>
            {localize(
                'We will occasionally prompt you to verify your account by sending you a verification link. This is to make sure it’s you and that your account hasn’t been compromised.',
            )}
        </Text>
        <Text>
            {localize(
                'If your verification link has expired, try withdrawing or logging in again.',
            )}
        </Text>
    </>
)

const WithdrawalProcessingTime = () => (
    <Text>
        {localize(
            'We process all your deposits and withdrawals within 24 hours. However, your bank or money transfer service may require additional time to process your request.',
        )}
    </Text>
)

const articles = [
    {
        category: 'Account',
        articles: [
            {
                title: 'Who can open an account?',
                keywords: ['account', 'how', 'who'],
                category: 'Account',
                sub_category: 'Opening an account',
                label: 'who-can-open-an-account',
                content: <WhoCanOpenAnAccount />,
            },
            {
                title: 'Opening an account',
                keywords: ['account', 'how', 'who'],
                category: 'Account',
                sub_category: 'Opening an account',
                label: 'opening-an-account',
                content: <OpeningAnAccount />,
            },
            {
                title: 'Changing your personal details',
                keywords: ['change', 'name', 'residence', 'email'],
                category: 'Account',
                sub_category: 'Managing your account',
                label: 'changing-your-personal-details',
                content: <ChangingPersonalDetails />,
            },
            {
                title: 'Recovering your password',
                keywords: ['change', 'name', 'login'],
                category: 'Account',
                sub_category: 'Managing your account',
                label: 'recovering-your-password',
                content: <RecoveringYourPassword />,
            },
            {
                title: 'Authenticating your account',
                keywords: ['change', 'verify'],
                category: 'Account',
                sub_category: 'Managing your account',
                label: 'recovering-your-password',
                content: <AuthenticatingYourAccount />,
            },
        ],
    },
    {
        category: 'Deposits and withdrawals',
        articles: [
            {
                title: 'Making a deposit',
                keywords: ['deposit', 'make'],
                category: 'Deposits and withdrawals',
                sub_category: 'Deposits',
                label: 'making-a-deposit',
                content: <MakingADeposit />,
            },
            {
                title: 'Expired verification link',
                keywords: ['verify'],
                category: 'Deposits and withdrawals',
                sub_category: 'Deposits',
                label: 'expired-verification-link',
                content: <ExpiredVerificationLink />,
            },
            {
                title: 'Withdrawal processing time',
                keywords: ['Withdrawal', 'take', 'money'],
                category: 'Deposits and withdrawals',
                sub_category: 'Withdrawals',
                label: 'withdrawal-processing-time',
                content: <WithdrawalProcessingTime />,
            },
        ],
    },
]

const getRelatedArticles = (article_list, selected_article) =>
    article_list.filter(
        article =>
            article.sub_category === selected_article.sub_category &&
            article.title !== selected_article.title,
    )

const getAllArticles = articles =>
    articles
        .map(category => category.articles)
        // flatten the array, gatsby build does not support .flat() yet
        .reduce((arr, article_arr) => arr.concat(article_arr), [])

const Backdrop = styled.section`
    background-color: var(--color-black);
    padding: 12rem 0;
`

const SearchIconBig = styled(SearchIcon)`
    position: absolute;
    left: 0;
    top: 3px;
`

const SearchCrossIcon = styled(CrossIcon)`
    :hover {
        cursor: pointer;
    }
`

const SearchForm = styled.form`
    position: relative;
    padding-left: 6.4rem;
`

const Search = styled.input`
    font-size: 4.4rem;
    font-weight: bold;
    color: var(--color-white);
    background-color: var(--color-black);
    border: none;
    outline: none;

    ::placeholder {
        color: var(--color-grey-3);
    }
`

const LeftRightContainer = styled.div`
    display: flex;
    padding: ${props => props.padding || ''};

    > :first-child {
        margin-right: auto;
    }
`

const ResultWrapper = styled.div`
    margin-top: 4rem;

    > :first-child {
        margin-bottom: 1.6rem;
    }
`

class HelpCentre extends Component {
    constructor(props) {
        super(props)
        const all_articles = getAllArticles(articles)

        this.state = {
            all_articles,
            search: '',
            selected_article: null,
            show_search: true,
        }
    }

    handleInputChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: `${value.trim()}` })
    }

    handleSubmit = e => e.preventDefault()

    handleSelectArticle = article => {
        navigate(`#${article.label}`)
        this.setState({
            selected_article: article,
            show_search: false,
            search: '',
        })
    }

    toggleSearch = () =>
        this.setState(prevState => ({
            show_search: !prevState.show_search,
        }))

    clearSearch = () => this.setState({ search: '' })

    componentDidMount = () => {
        const current_label = location.hash ? location.hash.substring(1) : ''
        if (current_label) {
            const selected_article = this.state.all_articles.find(
                article => article.label === current_label,
            )
            this.setState({ selected_article, show_search: false })
        }
    }

    componentDidUpdate = () => {
        const current_label = location.hash ? location.hash.substring(1) : ''
        if (!current_label && this.state.selected_article) {
            this.setState({ selected_article: null, show_search: true })
        }
    }

    render() {
        const {
            all_articles,
            search,
            selected_article,
            show_search,
        } = this.state

        const filtered_articles = matchSorter(all_articles, search, {
            keys: ['title', 'sub_category', 'keywords'],
        })
        const has_results = !!filtered_articles.length

        return (
            <Layout>
                <SEO title={localize('Help centre')} />
                {show_search && (
                    <Backdrop>
                        <Container align="normal" direction="column">
                            <SearchForm
                                onSubmit={this.handleSubmit}
                                autoComplete="off"
                            >
                                <SearchIconBig />
                                <Search
                                    autoFocus
                                    name="search"
                                    value={search}
                                    onChange={this.handleInputChange}
                                    placeholder={localize('How can we help?')}
                                    data-lpignore="true"
                                />
                                {search.length && (
                                    <SearchCrossIcon
                                        onClick={this.clearSearch}
                                    />
                                )}
                            </SearchForm>
                            <ResultWrapper>
                                {has_results && search.length && (
                                    <SearchSuccess
                                        suggested_topics={filtered_articles}
                                        onClick={this.handleSelectArticle}
                                        max_length={3}
                                    />
                                )}
                                {!has_results && (
                                    <SearchError search={search} />
                                )}
                            </ResultWrapper>
                        </Container>
                    </Backdrop>
                )}
                <Container align="normal" direction="column">
                    {!selected_article && (
                        <LeftRightContainer padding="8rem 0">
                            <ArticleList
                                articles={articles}
                                onClick={this.handleSelectArticle}
                            />
                        </LeftRightContainer>
                    )}
                    {selected_article && (
                        <Article
                            article={selected_article}
                            all_articles={all_articles}
                            onClick={this.handleSelectArticle}
                            toggleSearch={this.toggleSearch}
                        />
                    )}
                </Container>
            </Layout>
        )
    }
}

const ArticleContent = styled.div`
    width: 60%;

    > *:not(:last-child) {
        margin-top: 0;
        padding-bottom: 0.8rem;
    }
    ${Header} {
        margin-bottom: 1.6rem;
    }
    ${Text} {
        color: var(--color-black-3);
        line-height: 1.5;
    }
`

const StyledLink = styled(LocalizedLink)`
    font-size: 2rem;
    color: var(--color-red);

    &::before {
        content: '<';
        display: inline-block;
        margin-right: 4px;
        font-weight: 300;
        text-decoration: none;
    }
`

const SmallSearchIcon = styled(SearchIcon)`
    height: 27px;
    width: 27px;

    use {
        fill: var(--color-green);
    }
    &:hover {
        cursor: pointer;
    }
`

const ListWrapper = styled.div`
    ${Header} {
        margin-bottom: 1.6rem;
    }
`

const Article = ({ article, all_articles, onClick, toggleSearch }) => {
    const related_articles = getRelatedArticles(all_articles, article)

    return (
        <>
            <LeftRightContainer>
                <StyledLink to="/help-centre/">
                    {localize('Back to Help topics')}
                </StyledLink>
                <SmallSearchIcon onClick={toggleSearch} />
            </LeftRightContainer>
            <LeftRightContainer padding="4.5rem 0">
                <ArticleContent>
                    <Header as="h3">{`${article.category} - ${article.title}`}</Header>
                    {article.content}
                </ArticleContent>
                {!!related_articles.length && (
                    <ListWrapper>
                        <Header as="h3">{localize('Related topics')}</Header>
                        <LinkList list={related_articles} onClick={onClick} />
                    </ListWrapper>
                )}
            </LeftRightContainer>
        </>
    )
}
Article.propTypes = {
    all_articles: PropTypes.array,
    article: PropTypes.object,
    onClick: PropTypes.func,
    toggleSearch: PropTypes.func,
}

const SearchSuccess = ({ suggested_topics, onClick, max_length }) => (
    <>
        <Header as="h3" color="white">
            {localize('Topic Suggestions')}
        </Header>
        <LinkList
            list={suggested_topics.slice(0, max_length)}
            onClick={onClick}
            link_style={{ color: 'white', size: '2rem' }}
        />
    </>
)
SearchSuccess.propTypes = {
    max_length: PropTypes.number,
    onClick: PropTypes.func,
    suggested_topics: PropTypes.array,
}

const Ul = styled.ul`
    list-style: unset;
    color: var(--color-white);
    font-size: var(--text-size-s);
    margin-top: 0.8rem;
    margin-left: 2rem;

    > *:not(:last-child) {
        padding-bottom: 0.8rem;
    }
`

const Ol = styled(Ul).attrs({
    as: 'ol',
})`
    list-style-type: decimal;
`

const Li = styled(Text).attrs({
    as: 'li',
})``

const ErrorHeader = styled(Header)`
    font-size: 2rem;
    padding-bottom: 0.8rem;
`

const SearchError = ({ search }) => (
    <>
        <ErrorHeader as="h5" color="white">
            {localize(
                `Sorry, we couldn’t find any results matching “${search}”.`,
                { search },
            )}
        </ErrorHeader>
        <Text color="green">{localize('Search tips:')}</Text>
        <Ul>
            <Li color="white">
                {localize('Check your spelling and try again')}
            </Li>
            <Li color="white">{localize('Try another keyword')}</Li>
            <Li color="white">
                {localize(
                    'Keep your search term short as our search capabilities works best with short search terms',
                )}
            </Li>
        </Ul>
    </>
)
SearchError.propTypes = {
    search: PropTypes.string,
}

const ArticleList = ({ articles, onClick }) => (
    <>
        {articles.map((category, idx) => (
            <ListWrapper key={idx}>
                <Header as="h3">{category.category}</Header>
                <LinkList
                    link_style={{ size: '2rem' }}
                    list={category.articles}
                    onClick={onClick}
                />
            </ListWrapper>
        ))}
    </>
)
ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}

const ListNoBullets = styled.ul`
    margin-bottom: 4.2rem;
    list-style: none;

    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
`

const LinkList = ({ list, onClick, link_style }) => (
    <ListNoBullets>
        {list.map((item, idx) => (
            <li key={idx}>
                <LinkText {...link_style} onClick={() => onClick(item)}>
                    {item.title}
                </LinkText>
            </li>
        ))}
    </ListNoBullets>
)
LinkList.propTypes = {
    link_style: PropTypes.object,
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}

export default WithIntl()(HelpCentre)
